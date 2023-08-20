function NoteList({ nots, onDelete, onfinished }) {

  
  return (
    <div className="note-list">
      {nots.map((nots) => (
        <NoteItem
          nots={nots}
          key={nots.id}
          onDelete={onDelete}
          onfinished={onfinished}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ nots, onDelete, onfinished }) {
  const options = {
    day: "numeric",
    weekday: "long",
    year: "numeric",
    month: "short",
  };
  return (
    <div className={`note-item ${nots.Finished ? "completed" : ""}`}>
      <div className="note-item__header">
        <div className="actions">
          <div className="checkbox-wrapper-10">
            <input
              id={nots.id}
              type="checkbox"
              className="tgl tgl-flip"
              name={nots.id}
              value={nots.id}
              checked={nots.finished}
              onChange={ onfinished}
            />
            <label
              htmlFor={nots.id}
              data-tg-on="انجام شد"
              className="tgl-btn"
              data-tg-off="انجام نشده"
            ></label>
          </div>
          <button onClick={() => onDelete(nots.id)}>
            <img src="./Images/icons8-remove-48.png" width={30} alt="" />
          </button>
        </div>
        <div>
          <div className="title">{nots.title}</div>
          <div className="desc">{nots.description}</div>
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(nots.createdAt).toLocaleDateString("fa-IR", options)}
      </div>
    </div>
  );
}
