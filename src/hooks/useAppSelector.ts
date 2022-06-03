import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux";

/**
 * @description Redux selector with types added
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
