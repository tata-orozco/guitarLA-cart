export default function ItemCounter({totalItems} : {totalItems: number}) {
    return (
      <div className="rounded-circle">{totalItems}</div>
    )
  }