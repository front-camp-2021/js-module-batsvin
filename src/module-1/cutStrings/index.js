export const cutStrings = (arr = []) => {
   const result = arr.map(word => {
      return word.length
   })
   let minElm = Math.min(...result)
   const results = arr.map(word2 => {
      word2 = word2.slice(0, minElm)
      return word2
   })
   return results
};
