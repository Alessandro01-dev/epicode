import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Search, X } from "lucide-react";
import "./messages.css";
import useUsers from "../../hooks/useUsers";

export default function NewMessagePanel({ onClose }) {
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const { getUsers, usersData, usersIsLoading, usersError } = useUsers()

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    getUsers()
  }, []);

  const filteredUsers = usersData.filter((u) => {
    const fullName = `${u.name} ${u.surname}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  if (!mounted) return null;

  return createPortal(
    <div className="new-message-panel " onClick={(e) => e.stopPropagation()}>
      <div className="newmsg-header">
        <h3 className="newmsg-title">Nuovo messaggio</h3>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {!selectedUser && (
        <>
          <div className="newmsg-search-wrapper">
            <Search className="newmsg-search-icon" size={18} />
            <input
              type="text"
              placeholder="Cerca utenti..."
              className="newmsg-search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <h4 className="newmsg-section-title">Suggeriti</h4>

          <div className="newmsg-users-list">
            {filteredUsers.map((u) => (
              <div
                key={u._id}
                className="newmsg-user-item"
                onClick={() => setSelectedUser(u)}
              >
                {u.avatar ? (
                  <img src={u.avatar} className="newmsg-avatar" />
                ) : (
                  <div className="newmsg-avatar-placeholder"></div>
                )}
                <span>
                  {u.name} {u.surname}
                </span>
              </div>
            ))}

            {filteredUsers.length === 0 && (
              <p className="no-results-msg">Nessun utente trovato.</p>
            )}
          </div>
        </>
      )}

      {selectedUser && (
        <div className="write-message-container">
          <div className="write-msg-user">
            {selectedUser.avatar ? (
              <img src={selectedUser.avatar} className="newmsg-avatar" />
            ) : (
              <div className="newmsg-avatar-placeholder"></div>
            )}
            <p className="msg-to-name">
              {selectedUser.name} {selectedUser.surname}
            </p>
          </div>

          <textarea
            className="write-msg-input"
            placeholder="Scrivi un messaggio…"
          />

          <button className="send-msg-btn" onClick={onClose}>
            Invia
          </button>
        </div>
      )}
    </div>,
    document.body
  );
}
