import { useCollection } from "../../hooks/useCollection.js";

//styles
import "./UsersMessages.css";

export default function UsersMessages() {
  const { documents, error } = useCollection("usersmessage");

  return (
    <div className="messages">
      {error && <p>{error}</p>}
      {documents &&
        documents.map((document) => (
          <div className="user-message" key={document.id}>
            <h4>{document.name}</h4>
            <p>{document.email}</p>
            <div>Message: {document.message}</div>
          </div>
        ))}
    </div>
  );
}
