/**
 * 2d坐标轴内容列表
 * 每个坐标都能用来存放信息
 * 接收范型 T 代表存放信息的类型
 * 例如：{ '1': { '2': 'value' } }
 * 表示在 x=1, y=2 的位置存放了 value 信息
 */
export type ContentList<T> = Record<string, T>
