import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ name, description, logoUrl, handle }) {
    console.debug("CompanyCard", logoUrl);

    return (
        <Link className="CompanyCard card" to={`/companies/${handle}`}>
            <div className="card-body">
                <h6 className="card-title text-start">
                    {name}
                    {logoUrl && <img src={logoUrl}
                        alt={name}
                        className="float-end ms-5" />}
                </h6>
                <p className="text-start"><small>{description}</small></p>
            </div>
        </Link>
    );
}

export default CompanyCard;