function produceDrivingRange(range){
  return function checkRange(blockRange1, blockRange2){
     blockRange1 = blockRange1.replace('th','')
     blockRange2 = blockRange2.replace('th','')
     let totalRange = blockRange2 - blockRange1
     return (totalRange > range) ? `${totalRange - range} blocks out of range` : `within range by ${range - totalRange}`
  }
}

function produceTipCalculator(percentage) {
  return function calculateTip(bill){
    return bill * percentage
  }
}

function createDriver(){
  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
