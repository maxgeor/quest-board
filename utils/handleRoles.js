const getAllRoles = (roles, otherRoles) => {
  const allRoles = otherRoles 
                   ? [...otherRoles.split(', ')] 
                   : [...roles]

  return allRoles.filter(role => role !== 'Other...');
}

const bundleRoles = (roles, otherRoles) => {
  const allRoles = getAllRoles(roles, otherRoles);

  const bundledRoles = allRoles.map(role => {
    const isLast = role === allRoles[allRoles.length-1];
    const isSecondLast = role === allRoles[allRoles.length-2];

    return `${role}${isLast ? '' : isSecondLast ? ' & ' : ', '}`
  })

  return bundledRoles.join('');
}

export { bundleRoles, getAllRoles };