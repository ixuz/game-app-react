import { Grid, Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import React, { FC } from "react";
import {
  HelpOutline,
  LanguageRounded,
  MilitaryTech,
  Flag,
  Public,
  Shield,
  PermIdentity,
  MailOutlineRounded,
  MonetizationOnRounded,
  TrendingUpRounded,
  AnnouncementOutlined,
  SupervisedUserCircleRounded,
  OfflineBolt,
  AccessTime,
  Home,
  EvStation,
  Gavel,
  Business,
  HomeWork,
  GroupWork,
  PersonSearch,
} from "@mui/icons-material";

export enum ResourceType {
  UNKNOWN,
  ASSET,
  HONOR,
  KINGDOM,
  LAND,
  MILITARY,
  LEADER,
  MESSAGE,
  MINERAL,
  NETWORTH,
  NEWS,
  PLANET_TYPE,
  POPULATION,
  POWER,
  TIME,
  SOLDIER,
  TROOPER,
  LASER_TROOPER,
  TANK,
  PROBE,
  RESIDENCE,
  POWER_PLANT,
  STAR_MINE,
  PROBE_FACTORY,
  TICK,
  BUILDING,
  RESEARCH_POPULATION_BONUS,
  RESEARCH_POWER_BONUS,
  RESEARCH_MILITARY_BONUS,
  RESEARCH_MINERAL_BONUS,
  SCIENTIST,
}

export interface IResource {
  resourceType: ResourceType;
  length?: "short" | "medium" | "long";
  value?: string | number;
  sx?: SxProps<Theme>;
}

interface Props extends IResource {}

interface GrammarString {
  singular: string;
  plural: string;
}

const NAME_BY_TYPE: Record<ResourceType, GrammarString> = {
  [ResourceType.UNKNOWN]: { singular: "Unknown", plural: "Unknowns" },
  [ResourceType.ASSET]: { singular: "Asset", plural: "Assets" },
  [ResourceType.HONOR]: { singular: "Honor", plural: "Honor" },
  [ResourceType.KINGDOM]: { singular: "Kingdom", plural: "Kingdoms" },
  [ResourceType.LAND]: { singular: "Land", plural: "Land" },
  [ResourceType.MILITARY]: { singular: "Military", plural: "Militaries" },
  [ResourceType.LEADER]: { singular: "Leader", plural: "Leaders" },
  [ResourceType.MESSAGE]: { singular: "Message", plural: "Messages" },
  [ResourceType.MINERAL]: { singular: "Mineral", plural: "Minerals" },
  [ResourceType.NETWORTH]: { singular: "Networth", plural: "Networth" },
  [ResourceType.NEWS]: { singular: "News", plural: "News" },
  [ResourceType.PLANET_TYPE]: {
    singular: "Planet Type",
    plural: "Planet Types",
  },
  [ResourceType.POPULATION]: { singular: "Population", plural: "Population" },
  [ResourceType.POWER]: { singular: "Power", plural: "Power" },
  [ResourceType.TIME]: { singular: "Time", plural: "Time" },
  [ResourceType.SOLDIER]: { singular: "Soldier", plural: "Soldiers" },
  [ResourceType.TROOPER]: { singular: "Trooper", plural: "Troopers" },
  [ResourceType.LASER_TROOPER]: {
    singular: "Laser Trooper",
    plural: "Laser Troopers",
  },
  [ResourceType.TANK]: { singular: "Tank", plural: "Tanks" },
  [ResourceType.PROBE]: { singular: "Probe", plural: "Probes" },
  [ResourceType.RESIDENCE]: { singular: "Residence", plural: "Residences" },
  [ResourceType.POWER_PLANT]: {
    singular: "Power Plant",
    plural: "Power Plants",
  },
  [ResourceType.STAR_MINE]: { singular: "Star Mine", plural: "Star Mines" },
  [ResourceType.PROBE_FACTORY]: {
    singular: "Probe Factory",
    plural: "Probe Factories",
  },
  [ResourceType.TICK]: { singular: "Tick", plural: "Ticks" },
  [ResourceType.BUILDING]: { singular: "Building", plural: "Buildings" },
  [ResourceType.RESEARCH_POPULATION_BONUS]: {
    singular: "Population Bonus",
    plural: "Population Bonus",
  },
  [ResourceType.RESEARCH_POWER_BONUS]: {
    singular: "Power Bonus",
    plural: "Power Bonus",
  },
  [ResourceType.RESEARCH_MILITARY_BONUS]: {
    singular: "Military Bonus",
    plural: "Military Bonus",
  },
  [ResourceType.RESEARCH_MINERAL_BONUS]: {
    singular: "Mineral Bonus",
    plural: "Mineral Bonus",
  },
  [ResourceType.SCIENTIST]: {
    singular: "Scientist",
    plural: "Scientists",
  },
};

const ICON_BY_TYPE: Record<ResourceType, React.ReactNode> = {
  [ResourceType.UNKNOWN]: <HelpOutline />,
  [ResourceType.ASSET]: <LanguageRounded />,
  [ResourceType.HONOR]: <MilitaryTech />,
  [ResourceType.KINGDOM]: <Flag />,
  [ResourceType.LAND]: <Public />,
  [ResourceType.MILITARY]: <MilitaryTech />,
  [ResourceType.LEADER]: <PermIdentity />,
  [ResourceType.MESSAGE]: <MailOutlineRounded />,
  [ResourceType.MINERAL]: <MonetizationOnRounded />,
  [ResourceType.NETWORTH]: <TrendingUpRounded />,
  [ResourceType.NEWS]: <AnnouncementOutlined />,
  [ResourceType.PLANET_TYPE]: <LanguageRounded />,
  [ResourceType.POPULATION]: <SupervisedUserCircleRounded />,
  [ResourceType.POWER]: <OfflineBolt />,
  [ResourceType.TIME]: <AccessTime />,
  [ResourceType.SOLDIER]: <Shield />,
  [ResourceType.TROOPER]: <Shield />,
  [ResourceType.LASER_TROOPER]: <Shield />,
  [ResourceType.TANK]: <Shield />,
  [ResourceType.PROBE]: <Shield />,
  [ResourceType.RESIDENCE]: <Home />,
  [ResourceType.POWER_PLANT]: <EvStation />,
  [ResourceType.STAR_MINE]: <Gavel />,
  [ResourceType.PROBE_FACTORY]: <Business />,
  [ResourceType.TICK]: <AccessTime />,
  [ResourceType.BUILDING]: <HomeWork />,
  [ResourceType.RESEARCH_POPULATION_BONUS]: <GroupWork />,
  [ResourceType.RESEARCH_POWER_BONUS]: <GroupWork />,
  [ResourceType.RESEARCH_MILITARY_BONUS]: <GroupWork />,
  [ResourceType.RESEARCH_MINERAL_BONUS]: <GroupWork />,
  [ResourceType.SCIENTIST]: <PersonSearch />,
};

const Resource: FC<Props> = ({ resourceType, length = "long", value, sx }) => {
  let numberFormat = new Intl.NumberFormat("en-US");
  const formattedValue =
    typeof value === "number" ? numberFormat.format(value) : value;

  return (
    <Grid
      item
      sx={{
        display: "flex",
        flexDirection: "row",
        ...sx,
      }}
    >
      {(length === "medium" || length === "long") && ICON_BY_TYPE[resourceType]}
      {(length === "medium" || length === "long") && "\xa0"}
      <strong>{formattedValue && formattedValue}</strong>
      {length === "long" && "\xa0"}
      {length === "long" &&
        (typeof value !== "number" || value === 1
          ? NAME_BY_TYPE[resourceType].singular.toLowerCase()
          : NAME_BY_TYPE[resourceType].plural.toLowerCase())}
    </Grid>
  );
};

export default Resource;
