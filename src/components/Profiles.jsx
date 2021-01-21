import React from "react";

const Profiles = ({ loading, profiles }) => {
  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="row">
      {profiles.map((profile) => {
        return (
          <div key={profile.UserName} className="card col-lg-3">
            <div className="card-body">
              <h5 className="card-title heading">
                {profile.FirstName} {profile.LastName}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{profile.Gender}</h6>
              <ul className="list-group list-group-flush content">
                <li className="list-group-item">Email: {profile.Email}</li>
                <li className="list-group-item">Phone: {profile.PhoneNumber}</li>
                <li className="list-group-item">UserName: {profile.UserName}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profiles;
