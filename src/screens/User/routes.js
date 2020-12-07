import Wardrobe from "./Clothes/Wardrobe.js";
import AddClothes from './Clothes/AddClothes.js';
import AddTrip from './Trip/AddTrip.js';
import ListTrip from './Trip/ListTrip.js';
import TodaySet from './Sets/TodaysSet.js';
import { WorkRounded, CalendarTodayRounded, AddRounded, TodayRounded, CollectionsRounded } from '@material-ui/icons';

const pathIds = {
    wardrobe: "wardrobe",
    todaysSet: "todays-set",
    addCloth: "add-cloth",
    listTrip: "list-trip",
    addTrip: "add-trip",
};

const pathRouting = {
    wardrobe: "/clothes/list",
    todaySet: "/todaysset",
    addCloth: "/clothes/add",
    listTrip: "/trip/list",
    addTrip: "/trip/add",
};

const loggedInRoutes = {
    [pathIds.wardrobe]: {
        path: pathRouting.wardrobe,
        sidebarName: "SZAFA",
        component: Wardrobe,
        icon: CollectionsRounded,
    },
    [pathIds.todaySet]: {
        path: pathRouting.todaySet,
        sidebarName: "ZESTAW NA DZIŚ",
        component: TodaySet,
        icon: TodayRounded,
    },
    [pathIds.addCloth]: {
        path: pathRouting.addCloth,
        sidebarName: "DODAJ UBRNIE",
        component: AddClothes,
        icon: AddRounded,
    },
    [pathIds.listTrip]: {
        path: pathRouting.listTrip,
        sidebarName: "PODRÓŻE",
        component: ListTrip,
        icon: WorkRounded,
    },
    [pathIds.addTrip]: {
        path: pathRouting.addTrip,
        sidebarName: "PLANOWANIE PODRÓŻY",
        component: AddTrip,
        icon: CalendarTodayRounded,
    },
};

export { loggedInRoutes, pathIds, pathRouting };
