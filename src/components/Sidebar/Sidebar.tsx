import { Grid, Link } from "@mui/material";

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <Grid container rowSpacing={1} justifyContent="center" p={1}>
        <Grid container item xs={12} justifyContent="center">
          <div style={{ textAlign: "center" }}>
            <div>Iotakingdoms</div>
          </div>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <div style={{ textAlign: "center" }}>
            <div>
              <Link href="/">Status</Link>
            </div>
          </div>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <div style={{ textAlign: "center" }}>
            <div>
              <Link href="/sector">Your Sector</Link>
            </div>
            <div>
              <Link href="/sector">View Sector</Link>
            </div>
            <div>
              <Link href="/explore">Explore</Link>
            </div>
            <div>
              <Link href="/buildings">Buildings</Link>
            </div>
            <div>
              <Link href="/research">Research</Link>
            </div>
            <div>
              <Link href="/military">Military</Link>
            </div>
          </div>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <div style={{ textAlign: "center" }}>
            <div>
              <Link href="#">Probe room</Link>
            </div>
            <div>
              <Link href="#">Attack room</Link>
            </div>
            <div>
              <Link href="#">Missile room</Link>
            </div>
          </div>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <div style={{ textAlign: "center" }}>
            <div>
              <Link href="#">Alliances</Link>
            </div>
            <div>
              <Link href="#">Sector Politics</Link>
            </div>
            <div>
              <Link href="#">Sector Forums</Link>
            </div>
            <div>
              <Link href="#">Alliance Forums</Link>
            </div>
            <div>
              <Link href="#">Public Forums</Link>
            </div>
            <div>
              <Link href="#">Messages</Link>
            </div>
            <div>
              <Link href="#">Send Aid</Link>
            </div>
          </div>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <div style={{ textAlign: "center" }}>
            <div>
              <Link href="#">Scores</Link>
            </div>
            <div>
              <Link href="#">Sector News</Link>
            </div>
            <div>
              <Link href="#">Alliance News</Link>
            </div>
            <div>
              <Link href="#">Universal News</Link>
            </div>
          </div>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <div style={{ textAlign: "center" }}>
            <div>
              <Link href="#">Shields</Link>
            </div>
            <div>
              <Link href="#">Preferences</Link>
            </div>
            <div>
              <Link href="#">Rewards</Link>
            </div>
          </div>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <div style={{ textAlign: "center" }}>
            <div>
              <Link href="#">Logout</Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;
