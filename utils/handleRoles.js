import Role from "../components/Role";

const getAllRoles = (roles, otherRoles) => {
  return (otherRoles ? [...roles, ...otherRoles.split(', ')] : roles)
          .filter(role => role !== 'Other...');
}

const bundleRoles = (roles, otherRoles, useUnderlines) => {
  const allRoles = getAllRoles(roles, otherRoles);

  return allRoles.map((role, index) => {
    return <Role key={index} 
                 title={role}
                 isLast={role === allRoles[allRoles.length-1]}
                 isSecondLast={role === allRoles[allRoles.length-2]} 
                 useUnderlines={useUnderlines}
           />
  });
}

export { bundleRoles, getAllRoles };