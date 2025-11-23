/**
 * Companion Chat Toggle Button
 * Floating button to open/close the companion chat
 */

import './CompanionChatButton.css';

interface CompanionChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const CompanionChatButton: React.FC<CompanionChatButtonProps> = ({ onClick, isOpen }) => {
  if (isOpen) return null; // Hide button when chat is open

  return (
    <button className="companion-chat-button" onClick={onClick} title="Chat with your companion">
      <div className="button-glow"></div>
      <div className="button-companion"></div>
      <div className="button-notification-dot"></div>
      <span className="button-tooltip">Chat</span>
    </button>
  );
};
