export default (function getUniqueId(){
  let count:number = 0;
  return () => {
    const dateId:number = Date.now() * 1000;
    const id:string = dateId + (count += 1 % 1000).toString(16);
    return id;
  };
})();

