export function Counter({ value, onIncrease, onDecrease }) {
  return (
    <div>
      <button type="button" onClick={onIncrease}>
        +
      </button>
      {value}
      <button type="button" onClick={onDecrease}>
        -
      </button>
    </div>
  );
}
