function NoteStatus({nots}) {
  const allNots = nots.length;
  const finishedNote = nots.filter((n) => n.Finished).length;
  const onfinished = allNots - finishedNote;
  if(!allNots) return <h2 className="no-nots">هیچ نوتی و یا متنی وجود ندارد <br />برای ایجاد متن های جدید در سمت چپ اقدام کنید   </h2>
  return (
    <ul className="note-status">
      <li>
        همه <span>{allNots}</span>
      </li>
      <li>
        انجام شده<span>{finishedNote}</span>
      </li>
      <li>
        مانده ها <span>{onfinished}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
