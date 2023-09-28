import imageSrc from "../assets/campaign bg/larm-rmah-AEaTUnvneik-unsplash.jpg";

export const categories = [
    "Housing",
    "Education",
    "Unemployment",
    "Healthcare",
    "Food",
    "Children",
    "Start-up Funding",
    "Disability",
    "Charity",
    "Business Incubator",
    "NGO",
    "Orphanage",
    "Research Funding",
    "Disaster Recovery"
];

export const campaignsViews = [
    {
        label: "All campaigns",
        value: "all"
    },
    {
        label: "Your Bookmarks",
        value: "bookmarks"
    },
];

export const campaignsSort = [
    {
        label: "Most Recent",
        value: "date",
        action: (a, b) => b.createdOn - a.createdOn
    },
    {
        label: "Deadline",
        value: "deadline",
        action: (a, b) => a.deadline - b.deadline
    },
    {
        label: "Popularity",
        value: "trending",
        action: (a, b) => b.donations.length - a.donations.length
    },
    {
        label: "Requested Amount",
        value: "request",
        action: (a, b) => b.requested - a.requested
    }
]

export const campaigns = [
    {
        id: 0,
        owner: "John Doe",
        title: "Help John Doe pursue a Master's education",
        about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nemo in quaerat rerum aspernatur, quam ipsa aliquid exercitationem distinctio laudantium hic ut delectus nam, voluptas repudiandae nesciunt dolorum necessitatibus voluptatibus maxime illum quae aperiam incidunt adipisci consequuntur. Tempora minima error ipsam voluptate quisquam, eius vel, quo culpa aut reprehenderit a nesciunt cupiditate nostrum nisi voluptas ratione eos modi corporis totam! Similique dolores ullam expedita? Ea doloremque soluta sit eos consequatur nemo, itaque autem sapiente delectus molestiae hic dolore excepturi obcaecati velit. Eaque expedita tempore sunt in officiis minus quaerat ea aut nostrum, molestias voluptatum sapiente, suscipit esse at fuga quo? Laborum hic fugit quis illo debitis? Quis assumenda voluptates delectus tenetur, eius maxime consequuntur sequi perferendis illum sunt nobis tempore? Eaque obcaecati eum culpa distinctio amet enim eligendi! Alias architecto reprehenderit voluptatum?",
        imageSrc: imageSrc,
        createdOn: new Date("1/1/2023"),
        deadline: new Date("12/1/2024"),
        categories: [1],
        requested: 20000,
        donations: [
            { donor: "Jack Dean", amount: 1900, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Sam Dan", amount: 1000, createdOn: new Date(), updatedOn: new Date() },
        ],
    },
    {
        id: 1,
        owner: "Jack Dean",
        title: "Fund raise for Benchem Primary School Children",
        about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nemo in quaerat rerum aspernatur, quam ipsa aliquid exercitationem distinctio laudantium hic ut delectus nam, voluptas repudiandae nesciunt dolorum necessitatibus voluptatibus maxime illum quae aperiam incidunt adipisci consequuntur. Tempora minima error ipsam voluptate quisquam, eius vel, quo culpa aut reprehenderit a nesciunt cupiditate nostrum nisi voluptas ratione eos modi corporis totam! Similique dolores ullam expedita? Ea doloremque soluta sit eos consequatur nemo, itaque autem sapiente delectus molestiae hic dolore excepturi obcaecati velit. Eaque expedita tempore sunt in officiis minus quaerat ea aut nostrum, molestias voluptatum sapiente, suscipit esse at fuga quo? Laborum hic fugit quis illo debitis? Quis assumenda voluptates delectus tenetur, eius maxime consequuntur sequi perferendis illum sunt nobis tempore? Eaque obcaecati eum culpa distinctio amet enim eligendi! Alias architecto reprehenderit voluptatum?",
        imageSrc: imageSrc,
        createdOn: new Date("2/1/2023"),
        deadline: new Date("12/1/2024"),
        categories: [1, 5],
        requested: 42000,
        donations: [
            { donor: "Tom Sawyer", amount: 400, createdOn: new Date(), updatedOn: new Date() },
            { donor: "John Doe", amount: 1000, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Sam Dan", amount: 200, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Jack Dempsey", amount: 500, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Don Cheadle", amount: 500, createdOn: new Date(), updatedOn: new Date() },
        ],
    },
    {
        id: 2,
        owner: "Sam Dan",
        title: "Fund raise for 20th October Santasi flooding",
        about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nemo in quaerat rerum aspernatur, quam ipsa aliquid exercitationem distinctio laudantium hic ut delectus nam, voluptas repudiandae nesciunt dolorum necessitatibus voluptatibus maxime illum quae aperiam incidunt adipisci consequuntur. Tempora minima error ipsam voluptate quisquam, eius vel, quo culpa aut reprehenderit a nesciunt cupiditate nostrum nisi voluptas ratione eos modi corporis totam! Similique dolores ullam expedita? Ea doloremque soluta sit eos consequatur nemo, itaque autem sapiente delectus molestiae hic dolore excepturi obcaecati velit. Eaque expedita tempore sunt in officiis minus quaerat ea aut nostrum, molestias voluptatum sapiente, suscipit esse at fuga quo? Laborum hic fugit quis illo debitis? Quis assumenda voluptates delectus tenetur, eius maxime consequuntur sequi perferendis illum sunt nobis tempore? Eaque obcaecati eum culpa distinctio amet enim eligendi! Alias architecto reprehenderit voluptatum?",
        imageSrc: imageSrc,
        createdOn: new Date("3/3/2023"),
        deadline: new Date("3/3/2024"),
        categories: [13],
        requested: 60000,
        donations: [
            { donor: "John Doe", amount: 2100, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Jack Dean", amount: 3100, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Don Cheadle", amount: 500, createdOn: new Date(), updatedOn: new Date() },
        ],
    },
    {
        id: 3,
        owner: "Mo Fisher",
        title: "Help children in Kunsum with food",
        about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nemo in quaerat rerum aspernatur, quam ipsa aliquid exercitationem distinctio laudantium hic ut delectus nam, voluptas repudiandae nesciunt dolorum necessitatibus voluptatibus maxime illum quae aperiam incidunt adipisci consequuntur. Tempora minima error ipsam voluptate quisquam, eius vel, quo culpa aut reprehenderit a nesciunt cupiditate nostrum nisi voluptas ratione eos modi corporis totam! Similique dolores ullam expedita? Ea doloremque soluta sit eos consequatur nemo, itaque autem sapiente delectus molestiae hic dolore excepturi obcaecati velit. Eaque expedita tempore sunt in officiis minus quaerat ea aut nostrum, molestias voluptatum sapiente, suscipit esse at fuga quo? Laborum hic fugit quis illo debitis? Quis assumenda voluptates delectus tenetur, eius maxime consequuntur sequi perferendis illum sunt nobis tempore? Eaque obcaecati eum culpa distinctio amet enim eligendi! Alias architecto reprehenderit voluptatum?",
        imageSrc: imageSrc,
        createdOn: new Date("4/4/2023"),
        deadline: new Date("4/4/2024"),
        categories: [5],
        requested: 560000,
        donations: [
            { donor: "John Doe", amount: 2100, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Jack Dean", amount: 31100, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Don Cheadle", amount: 500, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Tom Sawyer", amount: 4000, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Sam Dan", amount: 2000, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Jack Dempsey", amount: 500, createdOn: new Date(), updatedOn: new Date() },

        ],
    },
    {
        id: 4,
        owner: "Luther Van Dron",
        title: "Help me get a job",
        about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nemo in quaerat rerum aspernatur, quam ipsa aliquid exercitationem distinctio laudantium hic ut delectus nam, voluptas repudiandae nesciunt dolorum necessitatibus voluptatibus maxime illum quae aperiam incidunt adipisci consequuntur. Tempora minima error ipsam voluptate quisquam, eius vel, quo culpa aut reprehenderit a nesciunt cupiditate nostrum nisi voluptas ratione eos modi corporis totam! Similique dolores ullam expedita? Ea doloremque soluta sit eos consequatur nemo, itaque autem sapiente delectus molestiae hic dolore excepturi obcaecati velit. Eaque expedita tempore sunt in officiis minus quaerat ea aut nostrum, molestias voluptatum sapiente, suscipit esse at fuga quo? Laborum hic fugit quis illo debitis? Quis assumenda voluptates delectus tenetur, eius maxime consequuntur sequi perferendis illum sunt nobis tempore? Eaque obcaecati eum culpa distinctio amet enim eligendi! Alias architecto reprehenderit voluptatum?",
        imageSrc: imageSrc,
        createdOn: new Date("5/5/2023"),
        deadline: new Date("5/5/2025"),
        categories: [2],
        requested: 30000,
        donations: [
            { donor: "John Doe", amount: 2100, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Tom Sawyer", amount: 4000, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Sam Dan", amount: 2000, createdOn: new Date(), updatedOn: new Date() },
            { donor: "Jack Dempsey", amount: 500, createdOn: new Date(), updatedOn: new Date() },

        ],
    },
]