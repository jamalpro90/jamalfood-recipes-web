function Button({ text, outlined }) {
  const styleBtn = (outlined) => {
    if (outlined) {
      return 'btn-container-outlined';
    } else {
      return 'btn-container';
    }
  };

  return (
    <div className={styleBtn(outlined)}>
      <button>{text}</button>
    </div>
  );
}

export default Button;
