import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return null;

  return (
    <article>
      <div className="flex items-center my-10 justify-center">
        {user?.picture && (
          <img src={user.picture} alt={user?.name} className="mr-8" />
        )}

        <h2 className="text-2xl">{user?.name}</h2>
      </div>

      {user && (
        <ul className="text-left mx-auto w-full max-w-[500px]">
          {Object.keys(user).map((objKey) => (
            <li>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Profile;
