import Wardrobe from "./Clothes/wardrobe.js";
import AddClothes from './Clothes/addClothes.js';
import AddTrip from './Trip/addTrip.js';
import EditTrip from './Trip/editTrip.js';
import ListTrip from './Trip/listTrip.js';
import CreateSet from './Sets/createSet.js';

import { WorkRounded, CalendarTodayRounded, AddRounded, TodayRounded, CollectionsRounded } from '@material-ui/icons';

const pathIds = {
    wardrobe: "wardrobe",
    todaysSet: "todays-set",
    addCloth: "add-cloth",
    listTrip: "list-trip",
    addTrip: "add-trip",
    editTrip: "edit-trip",
};

const pathRouting = {
    wardrobe: "/clothes/list",
    createSet: "/createSet",
    addCloth: "/clothes/add",
    listTrip: "/trip/list",
    addTrip: "/trip/add",
    editTrip: "/trip/edit/:id",
};

const loggedInRoutes = {
    [pathIds.wardrobe]: {
        path: pathRouting.wardrobe,
        sidebarName: "SZAFA",
        component: Wardrobe,
        icon: CollectionsRounded,
    },
    [pathIds.createSet]: {
        path: pathRouting.createSet,
        sidebarName: "ZESTAW NA DZIŚ",
        component: CreateSet,
        icon: TodayRounded,
    },
    [pathIds.addCloth]: {
        path: pathRouting.addCloth,
        sidebarName: "DODAJ UBRANIE",
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
    [pathIds.editTrip]: {
        path: pathRouting.editTrip,
        sidebarName: "EDYTOWANIE PODRÓŻY",
        component: EditTrip,
        icon: CalendarTodayRounded,
    },
};

export { loggedInRoutes, pathIds, pathRouting };
