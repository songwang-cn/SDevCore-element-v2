<template>
  <div class="content">
    <div class="article">
      <Title title="WEST"/>
      <div class="logo_box">
        <LogoCard name="WEST/LAL"/>
        <LogoCard name="WEST/LAC"/>
        <LogoCard name="WEST/DAL"/>
        <LogoCard name="WEST/DEN"/>
        <LogoCard name="WEST/GSW"/>
        <LogoCard name="WEST/HOU"/>
        <LogoCard name="WEST/MEM"/>
        <LogoCard name="WEST/MIN"/>
        <LogoCard name="WEST/NOP"/>
        <LogoCard name="WEST/OKC"/>
        <LogoCard name="WEST/PHX"/>
        <LogoCard name="WEST/POR"/>
        <LogoCard name="WEST/SAC"/>
        <LogoCard name="WEST/SAS"/>
        <LogoCard name="WEST/UTA"/>
      </div>
    </div>
    <div class="line"/>
    <div class="article">
      <Title title="EAST"/>
      <div class="logo_box">
        <LogoCard name="EAST/ATL"/>
        <LogoCard name="EAST/BKN"/>
        <LogoCard name="EAST/BOS"/>
        <LogoCard name="EAST/CHA"/>
        <LogoCard name="EAST/CHI"/>
        <LogoCard name="EAST/CLE"/>
        <LogoCard name="EAST/DET"/>
        <LogoCard name="EAST/IND"/>
        <LogoCard name="EAST/MIA"/>
        <LogoCard name="EAST/MIL"/>
        <LogoCard name="EAST/NYK"/>
        <LogoCard name="EAST/ORL"/>
        <LogoCard name="EAST/PHI"/>
        <LogoCard name="EAST/TOR"/>
        <LogoCard name="EAST/WAS"/>
      </div>
    </div>
  </div>

</template>
<script>
import LogoCard from "@/components/LogoCard";
import Title from "@/components/Title";
export default {
  components: {Title, LogoCard}
}
</script>
<style scoped lang="less">
.content{
  display: flex;
  align-items: center;
  height: 100%;
  .line{
    width: 10px;
  }
  .article{
    width: 50%;
    .logo_box{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
}

</style>
