import amazingRides from "./amazingrides.jpeg";
import kunjunganIndustri from "./kunjunganindustri.jpeg";
import teamBuilding from "./teambuilding.jpeg";
import party from "./party.jpeg";

export const mediaGroups = [party, amazingRides, kunjunganIndustri, teamBuilding];
export const groups = [
    {
        name: 'Corporate Event',
        image: party,
        title: 'Corporate Event',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem minus porro vel tempora est explicabo deserunt? Quae rem, esse vero vitae debitis eligendi praesentium dolorem ullam, error accusamus voluptatum ut pariatur ducimus, id deserunt nobis. Pariatur, quasi et quisquam architecto iusto, commodi explicabo voluptatibus saepe perferendis consequuntur culpa totam.',
    },
    {
        name: 'Education Event',
        image: party,
        title: 'Education Event',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem minus porro vel tempora est explicabo deserunt? Quae rem, esse vero vitae debitis eligendi praesentium dolorem ullam, error accusamus voluptatum ut pariatur ducimus, id deserunt nobis. Pariatur, quasi et quisquam architecto iusto, commodi explicabo voluptatibus saepe perferendis consequuntur culpa totam.',
    },
    {
        name: 'Cooking Event',
        image: party,
        title: 'Cooking Event',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem minus porro vel tempora est explicabo deserunt? Quae rem, esse vero vitae debitis eligendi praesentium dolorem ullam, error accusamus voluptatum ut pariatur ducimus, id deserunt nobis. Pariatur, quasi et quisquam architecto iusto, commodi explicabo voluptatibus saepe perferendis consequuntur culpa totam.',
    },
    {
        name: 'Birthday Event',
        image: party,
        title: 'Birthday Event',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem minus porro vel tempora est explicabo deserunt? Quae rem, esse vero vitae debitis eligendi praesentium dolorem ullam, error accusamus voluptatum ut pariatur ducimus, id deserunt nobis. Pariatur, quasi et quisquam architecto iusto, commodi explicabo voluptatibus saepe perferendis consequuntur culpa totam.',
    },
    {
        name: 'Amazing Rides',
        image: amazingRides,
        title: 'Amazing Rides',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem minus porro vel tempora est explicabo deserunt? Quae rem, esse vero vitae debitis eligendi praesentium dolorem ullam, error accusamus voluptatum ut pariatur ducimus, id deserunt nobis. Pariatur, quasi et quisquam architecto iusto, commodi explicabo voluptatibus saepe perferendis consequuntur culpa totam.',
    },
    {
        name: 'Graduation',
        image: party,
        title: 'Graduation',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem minus porro vel tempora est explicabo deserunt? Quae rem, esse vero vitae debitis eligendi praesentium dolorem ullam, error accusamus voluptatum ut pariatur ducimus, id deserunt nobis. Pariatur, quasi et quisquam architecto iusto, commodi explicabo voluptatibus saepe perferendis consequuntur culpa totam.',
    },
    {
        name: 'Team Building',
        image: teamBuilding,
        title: 'Team Building',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem minus porro vel tempora est explicabo deserunt? Quae rem, esse vero vitae debitis eligendi praesentium dolorem ullam, error accusamus voluptatum ut pariatur ducimus, id deserunt nobis. Pariatur, quasi et quisquam architecto iusto, commodi explicabo voluptatibus saepe perferendis consequuntur culpa totam.',
    },
    {
        name: 'Kunjungan Industri',
        image: kunjunganIndustri,
        title: 'Kunjungan Industri',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem minus porro vel tempora est explicabo deserunt? Quae rem, esse vero vitae debitis eligendi praesentium dolorem ullam, error accusamus voluptatum ut pariatur ducimus, id deserunt nobis. Pariatur, quasi et quisquam architecto iusto, commodi explicabo voluptatibus saepe perferendis consequuntur culpa totam.',
    },
    {
        name: 'Outbound Kids',
        image: party,
        title: 'Outbound Kids',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem minus porro vel tempora est explicabo deserunt? Quae rem, esse vero vitae debitis eligendi praesentium dolorem ullam, error accusamus voluptatum ut pariatur ducimus, id deserunt nobis. Pariatur, quasi et quisquam architecto iusto, commodi explicabo voluptatibus saepe perferendis consequuntur culpa totam.',
    },
]

export const groupByIndex = index => groups[index];
export const mediaGroupByIndex = index => mediaGroups[index % mediaGroups.length];