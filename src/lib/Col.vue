<template>
    <div class="col">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        
    }
}
</script>

<style scoped lang="scss">
    .col {
        padding: 16px 0;
        margin-bottom: 8px;
        margin-top: 8px;
        background: #0092ff;
        color: #fff;
        width: 100%;
        text-align: center;
        &:nth-child(2n+1) {
            background: rgba(0,146,255,.75);
        }

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>