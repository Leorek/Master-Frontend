import React from "react";
import { Link, generatePath } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

interface IProps {
  organization: string;
  updateOrganization: Function;
}

export const ListPage: React.FC<IProps> = (props: IProps) => {
  const { organization, updateOrganization } = props;
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetchOrganizationMembers();
  }, []);

  const fetchOrganizationMembers = () => {
    fetch(
      `https://api.github.com/orgs/${organization
        ?.trim()
        .toLowerCase()}/members`
    )
      .then((response) => response.json())
      .then((json) => setMembers(json))
      .catch(() => setMembers([]));
  };

  return (
    <>
      <h2>Hello from List page</h2>

      <p style={{ fontWeight: "bold" }}>Organization filter: </p>
      <input
        value={organization}
        onChange={(e) => updateOrganization(e.target.value)}
      ></input>
      <button onClick={fetchOrganizationMembers}>Search</button>
      {members.length === 0 && <div>No results found</div>}
      {members.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr>
                <td>
                  <img src={member.avatar_url} style={{ width: "5rem" }} />
                </td>
                <td>
                  <span>{member.id}</span>
                </td>
                <td>
                  <Link to={generatePath("/detail/:id", { id: member.login })}>
                    {member.login}
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
