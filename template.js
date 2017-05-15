module.exports = {
  getProposalFormat(proposal) {
    switch (proposal.type) {
      case 'suggestion': 
        return `
          <h3>${proposal.type}</h3>
          <p>${proposal.text}</p>
        `;
      case 'hear-a-talk': 
        return `
          <h3>${proposal.type}</h3>
          <p>${proposal.text}</p>
        `;
      case 'give-a-talk': 
        return `
          <h3>${proposal.type}</h3>
          <p>${proposal.startDate}</p>
          <p>${proposal.endDate}</p>
          <p>${proposal.text}</p>
        `;
      case 'workshop-hack-night': 
        return `
          <h3>${proposal.type}</h3>
          <p>${proposal.text}</p>
        `;
      default:
        return `
          <p>${proposal}</p>
        `;
    };
  },

  emailTemplate(data) {
    /**
     * This takes a JSON data object from the front end of this format
     * 
     * {
     *   firstName: STRING,
     *   lastName: STRING,
     *   email: STRING,
     *   proposals: [{
     *     type: STRING, // can be of types: suggestion, hear-a-talk, give-a-talk, workshop-hack-night
     *     startDate: DATE,
     *     endDate: DATE
     *     text: STRING
     *   }]
     * }
     */

     const proposalText = data.proposals.reduce((acc, proposal) => {
       return acc.concat(this.getProposalFormat(proposal));
     }, '');

    return `
      <html>
        <body>
          <p>Hey, I'm ${data.firstName + " " +  data.lastName}</p>
          <p> from ${data.email} and these are my proposals to FreeCodeCamp Sacramento: </p>
          ${proposalText}
        </body>
      </html>
    `
  }
}