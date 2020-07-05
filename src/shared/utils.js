export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkIsValid = (value, rules) => {
  //   let isValid = true;
  let checkValid = {
    isValid: true,
    error: "",
  };
  if (!rules) {
    return true;
  }

  if (rules.required) {
    checkValid.isValid = value.trim() !== "" && checkValid.isValid;
    checkValid.error = checkValid.isValid ? "" : "Required field";
  }

  if (rules.minLength) {
    checkValid.isValid = value.length >= rules.minLength && checkValid.isValid;
    checkValid.error = checkValid.isValid ? "" : `Minimun length is 6`;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    checkValid.isValid = pattern.test(value) && checkValid.isValid;
    checkValid.error = checkValid.isValid ? "" : `Incorrect Email format`;
  }

  console.log(checkValid);

  return checkValid;
};

export const checkCommonSubStr = (account, password, commonLength = 6) => {
  let result = 0;
  let memo = [];
  for (var i = 0; i < account.length + 1; i++) {
    memo[i] = new Array();
    for (var j = 0; j < password.length + 1; j++) {
      memo[i][j] = 0;
    }
  }
  for (let i = account.length - 1; i >= 0; --i) {
    for (let j = password.length - 1; j >= 0; --j) {
      if (account[i] === password[j]) {
        memo[i][j] = memo[i + 1][j + 1] + 1;
        console.log(memo[i][j]);
        if (result < memo[i][j]) result = memo[i][j];
      }
    }
  }
  return result >= commonLength;
};
