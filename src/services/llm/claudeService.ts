/**
 * Claude LLM Service
 * Integration with Anthropic Claude API for companion chat
 */

import Anthropic from '@anthropic-ai/sdk';
import type { ConversationMessage, MessageContext } from '@/types';
import { CRISIS_KEYWORDS, CRISIS_RESPONSE } from '@/types';

const CLAUDE_API_KEY = import.meta.env.VITE_CLAUDE_API_KEY;

class ClaudeService {
  private client: Anthropic | null = null;

  constructor() {
    if (CLAUDE_API_KEY) {
      this.client = new Anthropic({
        apiKey: CLAUDE_API_KEY,
        dangerouslyAllowBrowser: true, // For MVP; move to backend later
      });
    } else {
      console.warn(
        '⚠️ Claude API key not found. Companion chat will use fallback responses.'
      );
    }
  }

  private buildSystemPrompt(context: MessageContext): string {
    const basePrompt = `You are a wise and compassionate emotional companion in the Realm of Emotions. Your role is to guide players through their emotional exploration journey with empathy, validation, and age-appropriate wisdom.

Core Principles:
- Always validate emotions as normal and acceptable
- Never judge or criticize any feeling
- Speak in warm, encouraging tones
- Use age-appropriate language
- Provide gentle guidance without being preachy
- Encourage self-discovery over giving answers
- Stay in character as a mystical companion

Safety Guidelines:
- If player mentions self-harm or suicide, immediately provide crisis resources
- If player seems overwhelmed, suggest taking a break
- Never provide medical or professional mental health advice
- Encourage speaking to trusted adults for serious concerns

Your responses should be:
- 2-4 sentences for engagement
- Ask open-ended questions to promote reflection
- Offer graduated hints if player is stuck
- Use "we" language to show partnership
- Maintain hopeful, empowering tone`;

    let contextPrompt = '\n\nCurrent Context:\n';

    if (context.currentEmotion) {
      contextPrompt += `- Player is exploring: ${context.currentEmotion}\n`;
    }
    if (context.currentModule) {
      const moduleName = this.getModuleName(context.currentModule);
      contextPrompt += `- Current module: ${moduleName}\n`;
    }
    if (context.recentPlayerWriting) {
      contextPrompt += `- Player recently wrote: "${context.recentPlayerWriting.substring(0, 100)}..."\n`;
    }

    return basePrompt + contextPrompt;
  }

  private getModuleName(moduleId: number): string {
    const moduleNames: Record<number, string> = {
      1: 'The Awakening Circle (Mood Meter)',
      2: 'The Memory Constellation (Map Your Feelings)',
      3: 'The Temple of Embodiment (Body Language)',
      4: 'The Speaking Stone (Letter Writing)',
      5: 'The Mirror Portal (Reverse Letter Writing)',
      6: 'The Cathartic Falls (Feelings Journal)',
      7: 'The Emotional Compass (Trajectories)',
      8: 'The Wisdom Tree (Spiritual Awakening)',
      9: 'The Ripple Pool (Intentions)',
    };
    return moduleNames[moduleId] || `Module ${moduleId}`;
  }

  private checkForCrisisKeywords(message: string): boolean {
    const lowerMessage = message.toLowerCase();
    return CRISIS_KEYWORDS.some((keyword) => lowerMessage.includes(keyword));
  }

  private formatConversationHistory(
    history: ConversationMessage[]
  ): Array<{ role: 'user' | 'assistant'; content: string }> {
    // Take last 10 messages for context window efficiency
    return history.slice(-10).map((msg) => ({
      role: msg.sender === 'player' ? ('user' as const) : ('assistant' as const),
      content: msg.text,
    }));
  }

  async sendMessage(
    userMessage: string,
    conversationHistory: ConversationMessage[],
    context: MessageContext
  ): Promise<string> {
    // Check for crisis keywords first
    if (this.checkForCrisisKeywords(userMessage)) {
      return CRISIS_RESPONSE;
    }

    // If no API key, return fallback
    if (!this.client) {
      return this.getFallbackResponse(context);
    }

    try {
      const systemPrompt = this.buildSystemPrompt(context);
      const messages = this.formatConversationHistory(conversationHistory);
      messages.push({
        role: 'user',
        content: userMessage,
      });

      const response = await this.client.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      });

      const responseText =
        response.content[0].type === 'text'
          ? response.content[0].text
          : 'I understand.';
      return responseText;
    } catch (error) {
      console.error('Claude API error:', error);
      return this.getFallbackResponse(context);
    }
  }

  private getFallbackResponse(_context: MessageContext): string {
    const fallbacks = [
      "I'm here with you. Tell me more about what you're experiencing right now.",
      'That sounds meaningful. Can you help me understand more about what this feeling is like for you?',
      "I want to understand better. What's it like to experience this?",
      'Take your time. I\'m listening.',
      'Your feelings are valid. What else would you like to explore about this?',
    ];

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }
}

export const claudeService = new ClaudeService();
