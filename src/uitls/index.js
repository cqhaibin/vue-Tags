import * as lodash from 'lodash'
import keys from './actions.Key'

export function merge (dest, source) {
  return lodash.merge(dest, source)
}
export const Keys = keys /* 导出Keys值 */
