
function NoteHeader({ nots,sortbuy,onSort }) {
  return (
    <div className="note-header">
      <h1>({nots.length}) نوت ها</h1>
      <select value={sortbuy} onChange={onSort}>
        <option value="latest">اخرین نوت ها </option>
        <option value="erliest">اولین نوت ها</option>
        <option value="finished">انجام شده ها!</option>
      </select>
    </div>
  );
}

export default NoteHeader;
