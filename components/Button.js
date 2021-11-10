function Button({ text, outlined, onClick }) {
  const styleBtn = (outlined) => {
    if (outlined) {
      return 'btn-container-outlined';
    } else {
      return 'btn-container';
    }
  };

  return (
    <div className={styleBtn(outlined)} onClick={onClick}>
      <button>{text}</button>
    </div>
  );
}

export default Button;
