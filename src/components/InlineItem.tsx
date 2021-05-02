import Item from "../server-first/Item";

type InlineItemProps = {
  item: Item;
}

export default function InlineItem(props: InlineItemProps) {
  return (
    <span style={{ color: props.item.quality.color}}>{props.item.shortName}</span>
  );
}