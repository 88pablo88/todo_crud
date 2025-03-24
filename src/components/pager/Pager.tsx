import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

import styles from "./styles.module.scss";

interface Props {
  isThereNext: boolean;
  isTherePrev: boolean;
  currentPage: number;
  totalPage: number;
  onClickNext: () => void;
  onClickPrev: () => void;
}

export const Pager = ({
  isThereNext,
  isTherePrev,
  currentPage,
  totalPage,
  onClickNext,
  onClickPrev,
}: Props) => {
  return (
    <div className={styles.pager}>
      <TbPlayerTrackPrevFilled
        onClick={currentPage !== 1 ? onClickPrev : () => {}}
        size={20}
        className={`${styles.command} ${
          !isTherePrev && styles.command_disabled
        }`}
      />
      <p>
        {currentPage} de {totalPage}
      </p>
      <TbPlayerTrackNextFilled
        onClick={currentPage < totalPage ? onClickNext : () => {}}
        fontSize={20}
        className={`${styles.command} ${
          !isThereNext && styles.command_disabled
        }`}
      />
    </div>
  );
};
