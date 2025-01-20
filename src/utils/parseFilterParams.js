const parseUserType = (userType) => {
    const isString = typeof userType === 'string';
    if (!isString) return;
    const isUserType = (userType) => ['client', 'business'].includes(userType);
    if (isUserType(userType)) return userType;
  };
  export const parseFilterParams = (query) => {
    const { userType } = query;

    const parsedUserType = parseUserType(userType);

    return {
        userType: parsedUserType,
    };
  };

