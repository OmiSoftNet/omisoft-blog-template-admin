import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux"

/**
 * @description Redux dispatch with types added
 */
export const useAppDispatch = () => useDispatch<AppDispatch>()