import Icon from "./Icon";

interface TrackingSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export default function TrackingSearch({
  value,
  onChange,
  onSubmit,
}: TrackingSearchProps) {
  return (
    <form
      className="tracking-search"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <Icon name="box" size={19} />
      <input
        aria-label="Código de rastreio"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Digite o código de rastreio"
      />
      <button aria-label="Buscar encomenda" type="submit">
        <Icon name="chevron" size={19} />
      </button>
    </form>
  );
}
