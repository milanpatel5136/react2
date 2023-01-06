import React from "react";

export default function Testtask2(pass) {
  return (
    <div className="row">
      <div className="col-6">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{pass.vs.id}</h4>

            <h4 class="card-title">{pass.vs.name}</h4>
            <p class="card-text">
              username:{pass.vs.username} or email:{pass.vs.email}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Address:{pass.vs.address.street} suite:{pass.vs.address.suite}
              city:{pass.vs.address.city}
            </li>
            <li class="list-group-item">{pass.vs.address.zipcode}</li>

            <li class="list-group-item">
              geo:L{pass.vs.address.lat} or {pass.vs.address.lng}
            </li>
          </ul>
          <div class="card-block">
            
            <h4 class="card-title">{pass.vs.phone}</h4>
            <h4 class="card-title">{pass.vs.website}</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{pass.vs.company.name}</li>
            <li class="list-group-item">{pass.vs.company.catchPhrase}</li>
            <li class="list-group-item">{pass.vs.company.bs}</li>
          </ul>
        </div>
        
      </div>
      
    </div>
  );
}
