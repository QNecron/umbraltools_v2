import Clipboard from "/icons/clipboard.svg?url";
import Close from "/icons/close.svg?url";
import Copy from "/icons/copy.svg?url";
import Dice from "/icons/dice.svg?url";
import Download from "/icons/cloud-download.svg?url";
import Upload from "/icons/cloud-upload.svg?url";
import Flame from "/icons/flame.svg?url";
import Save from "/icons/save.svg?url";
import Delete from "/icons/trash.svg?url";
import Search from "/icons/search.svg?url";
import Reader from "/icons/reader.svg?url";
import Character from "/icons/characters.svg?url";
import Shield from "/icons/shield.svg?url";
import Timer from "/icons/timer.svg?url";
import Settings from "/icons/settings.svg?url";
import MagicWand from "/icons/magic-wand.svg?url";

interface Props {
  icon: string;
  height?: number;
  width?: number;
}

export default function Icons({ icon, height, width }: Props) {

  const iconType = (type: string) => {
    let url = "error";
    if (type === "clipboard") url = Clipboard;
    if (type === "close") url = Close;
    if (type === "copy") url = Copy;
    if (type === "dice") url = Dice;
    if (type === "download") url = Download;
    if (type === "upload") url = Upload;
    if (type === "delete") url = Delete;
    if (type === "search") url = Search;
    if (type === "flame") url = Flame;
    if (type === "reader") url = Reader;
    if (type === "save") url = Save;
    if (type === "characters") url = Character;
    if (type === "shield") url = Shield;
    if (type === "timer") url = Timer;
    if (type === "settings") url = Settings;
    if (type === "wand") url = MagicWand;
    return url;
  };

  return (
    <img
      src={iconType(icon)}
      className={`icon ` + icon}
      height={height || 24}
      width={width || 24}
      alt=""
      aria-hidden="true"
    />
  );
}
