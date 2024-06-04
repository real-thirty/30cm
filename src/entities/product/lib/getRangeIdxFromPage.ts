const SIZEOFPAGE = 8;

export const getRangeIdxFromPage = (nowPage:number):[number, number] => [(nowPage - 1) * SIZEOFPAGE, nowPage * SIZEOFPAGE - 1]