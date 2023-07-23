function GagItemEdit({ gag }) {
  return (
    <form>
      <label>{gag.contant}</label>
      <input className="input" placeholder="what is your thoughts?"></input>
      <button>Accept</button>
    </form>
  );
}

export default GagItemEdit;
