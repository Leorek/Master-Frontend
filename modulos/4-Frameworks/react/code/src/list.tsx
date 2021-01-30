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
  organizationPage: number;
  updateOrganizationPage: Function;
}

export const ListPage: React.FC<IProps> = (props: IProps) => {
  const {
    organization,
    updateOrganization,
    organizationPage,
    updateOrganizationPage,
  } = props;
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetchOrganizationMembers();
  }, [organizationPage]);

  const fetchOrganizationMembers = () => {
    fetch(
      `https://api.github.com/orgs/${organization
        ?.trim()
        .toLowerCase()}/members?page=${organizationPage}`
    )
      .then((response) => response.json())
      .then((json) => setMembers(json))
      .catch(() => setMembers([]));
  };

  const previousPage = () => {
    const previousPageValue = organizationPage - 1;
    updateOrganizationPage(previousPageValue < 1 ? 1 : previousPageValue);
  };

  const updatePage = (e) => {
    const pageValue = e.target.value;
    updateOrganizationPage(pageValue < 1 ? 1 : pageValue);
  };

  const nextPage = () => {
    const nextPageValue = organizationPage + 1;
    updateOrganizationPage(nextPageValue);
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
      <div style={{ display: "block" }}>
        <button onClick={previousPage}>Previous</button>
        <input
          type="number"
          value={organizationPage}
          onChange={updatePage}
        ></input>
        <button onClick={nextPage}>Next</button>
      </div>
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
