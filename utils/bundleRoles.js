import Role from "../components/Role";

const bundleRoles = (roles, otherRoles, useUnderlines) => {
  const allRoles = otherRoles ? [...roles, ...otherRoles.split(', ')] : roles;
  const fliteredRoles = allRoles.filter(role => role !== 'Other...');

  return (fliteredRoles.map((role, index) => {
    return <Role key={index} 
                 title={role}
                 isLast={role === fliteredRoles[fliteredRoles.length-1]}
                 isSecondLast={role === fliteredRoles[fliteredRoles.length-2]} 
                 useUnderlines={useUnderlines}
           />
  }));
}

export default bundleRoles;