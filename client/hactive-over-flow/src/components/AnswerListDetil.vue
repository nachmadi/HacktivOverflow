<template lang="html">
  <div class="panel panel-default">
  <div class="panel-body">
    {{prop_detil_list.answer}}
  </div>
  <div class="panel-footer">
    <a href="#" class="btn btn-primary btn-sm">delete</a>
  </div>
</div>

</template>

<script>
export default {
  props: ['prop_detil_list']
}
</script>
