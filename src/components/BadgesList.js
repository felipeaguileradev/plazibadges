import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/BadgesList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = useState("");
  const [filterResult, setFilterResult] = useState(badges);

  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLocaleLowerCase());
    });

    setFilterResult(result);
  }, [badges, query]);

  return { query, setQuery, filterResult };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filterResult } = useSearchBadges(badges);

  if (filterResult.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="">Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled BadgesList">
        {filterResult.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}/`}
              >
                {badge.avatarUrl ? (
                  <img
                    src={badge.avatarUrl}
                    alt=""
                    className="BadgesListItem__avatar"
                  />
                ) : (
                  <Gravatar
                    email={badge.email}
                    alt=""
                    className="BadgesListItem__avatar"
                  />
                )}

                <div>
                  <div>
                    <strong>
                      {badge.firstName} {badge.lastName}
                    </strong>
                  </div>
                  <div className="Twitter__name">
                    <span className="Twitter__logo"></span>@{badge.twitter}
                  </div>
                  <div>{badge.jobTitle}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BadgesList;
