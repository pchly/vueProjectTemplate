<template>
    <div>
        this is ele.
        <el-button type="primary">anniu</el-button>
        <el-pagination
            layout="prev, pager, next"
            :total="Number(total)">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'elementui',
    props:['total'],
    sockets: {
        // 链接成功
    connect(data) {
    console.log(data);
    console.log('2215152435435');
  },
  }
}
</script>