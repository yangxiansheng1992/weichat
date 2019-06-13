<template>
  <div class="map">
    <Head :title="userData.title" :isSearchShow="isSearchShow"></Head>
    <main>
      <scroll class="scroll">
        <div class="wrapper">
          <el-amap
            ref="map"
            vid="amapDemo"
            :amap-manager="amapManager"
            :center="center"
            :zoom="zoom"
            :plugin="plugin"
            :events="events"
            class="amap-demo"
          >
          </el-amap>

          <div class="toolbar">
            <button @click="toshanghai()">去上海</button>
            <button @click="tohubei()">去湖北</button>
            <button @click="tohome()">石角山</button>
            <button @click="toyangxin()">阳新</button>
          </div>
        </div>
      </scroll>
    </main>
    <footer></footer>
  </div>
</template>
<script>
import Head from '@/components/head';
import Scroll from '@/components/scroll';
import VueAMap from 'vue-amap';
const amapManager = new VueAMap.AMapManager();

export default {
  name: 'interest',
  components: {
    Head,
    Scroll,
  },
  computed: {
    userData () {
      return { ...this.$route.params.chatItemData };
    }
  },
  data () {
    return {
      isSearchShow: false,
      amapManager,
      center: [115.09914368525148, 30.04930754426117],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          pName: 'ToolBar',
          events: {
            init (instance) {
              console.log(instance);
            }
          }
        },
        // {
        //   pName: 'MapType',
        //   defaultType: 0,
        //   events: {
        //     init (o) {
        //       console.log(o);
        //     }
        //   }
        // },
        // {
        //   pName: 'OverView',
        //   events: {
        //     init (instance) {
        //       console.log(instance);
        //     }
        //   }
        // },
        // {
        //   pName: 'Scale',
        //   events: {
        //     init (instance) {
        //       console.log(instance);
        //     }
        //   }
        // },
        // {
        //   pName: 'Geolocation',
        //   events: {
        //     init (o) {
        //       // o 是高德地图定位插件实例
        //       o.getCurrentPosition((status, result) => {
        //         if (result && result.position) {
        //           self.lng = result.position.lng;
        //           self.lat = result.position.lat;
        //           self.center = [self.lng, self.lat];
        //           self.loaded = true;
        //           self.$nextTick();
        //         }
        //       });
        //     },
        //   }
        // },
      ],
      events: {
        init: (map) => {
          AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
            const marker = new SimpleMarker({
              iconLabel: 'A',
              iconStyle: 'red',
              map: map,
              position: map.getCenter()
            });
          });
          console.log(map.getCenter())
          console.log(this.$refs.map.$$getInstance())
          map.getCity(result => {
            console.log(result)
          })
        },
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {
          console.log(e);
          alert('map clicked');
        }
      },
      zoom: 12,
    }
  },
  mounted () {
    // loadPromise.then(() => {
    //   this.map = new AMap.Map('amap-demo1', {
    //     center: [121.59996, 31.197646],
    //     zoom: 12
    //   })
    //   AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
    //     const marker = new SimpleMarker({
    //       iconLabel: 'A',
    //       iconStyle: 'red',
    //       map: this.map,
    //       position: this.map.getCenter()
    //     });
    //   });
    // })
  },
  methods: {
    toshanghai () {
      this.center = [121.59996, 31.197646];
    },
    tohubei () {
      this.center = [114.30499863848087, 30.591848631865414];
    },
    tohome () {
      this.center = [114.87443410009143, 29.71561202715223];
    },
    toyangxin () {
      this.center = [115.18035490438342, 29.85926914703324];
    },
    addMarker () {
      let marker = {
        position: [121.5273285 + (Math.random() - 0.5) * 0.02, 31.21515044 + (Math.random() - 0.5) * 0.02]
      };
      this.markers.push(marker);
    },
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
