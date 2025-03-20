// @ts-check

function createDeferred() {
  let resolve;
  const promise = new Promise((resolve, reject) => {
    resolve = resolve;
  });

  return {
    promise,
    resolve,
  };
}

module.exports = {
  createDeferred,
}