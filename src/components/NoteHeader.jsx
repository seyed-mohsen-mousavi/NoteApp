function NoteHeader({ nots, sortbuy, onSort }) {
  return (
    <div className="note-header">
      <h1> نوت ها ( {nots.length} )</h1>
      <div style={{display:"flex", alignItems:"center" , gap:"8px"}}>
       <h3> ترتیب : </h3>
        <select value={sortbuy} onChange={onSort}>
          <option value="latest">اخرین نوت ها </option>
          <option value="erliest">اولین نوت ها</option>
          <option value="finished">انجام شده ها!</option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
