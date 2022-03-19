import Role from "../../../components/Role";

const cleanupRoles = (roles, otherRoles) => {
  const allRoles = otherRoles ? [...roles, ...otherRoles.split(', ')] : roles;
  const fliteredRoles = allRoles.filter(role => role !== 'Other...');

  return (fliteredRoles.map((role, index) => {
    return <Role key={index} 
                 title={role}
                 isLast={role === fliteredRoles[fliteredRoles.length-1]}
                 isSecondLast={role === fliteredRoles[fliteredRoles.length-2]} 
            />
  }));
}

export default cleanupRoles;