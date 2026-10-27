import Clipboard from "../../public/icons/clipboard.svg?url";
import Close from "../../public/icons/close.svg?url";
import Copy from "../../public/icons/copy.svg?url";
import Dice from "../../public/icons/dice.svg?url";
import Download from "../../public/icons/cloud-download.svg?url";
import Upload from "../../public/icons/cloud-upload.svg?url";
import Flame from "../../public/icons/flame.svg?url";
import Save from "../../public/icons/save.svg?url";
import Delete from "../../public/icons/trash.svg?url";
import Search from "../../public/icons/search.svg?url";
import Reader from "../../public/icons/reader.svg?url";
import Character from "../../public/icons/characters.svg?url";
import Shield from "../../public/icons/shield.svg?url";
import Timer from "../../public/icons/timer.svg?url";
import Settings from "../../public/icons/settings.svg?url";
import MagicWand from "../../public/icons/magic-wand.svg?url";

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
