
export default {
  name: 'ElTableX',

  props: {
    columns: {
      type: Array,
      required: true,
      validator: function (columns) {
        // 每列数据必须包含 label 和 prop
        return columns.every((col) => col.label && col.prop)
      }
    },

    // 表格数据
    data: {
      type: Array,
      required: true
    },

    // ElTable 的 props
    elTableProps: {
      type: Object,
      default: () => ({})
    },

    columnAlign: {
      type: String,
      default: 'left'
    },

    useSelection: {
      type: Boolean,
      default: false
    }
  },

  render (h) {
    const allSlots = { ...this.$slots, ...this.$scopedSlots }
    const elTableColumns = this.columns.map((column, idx) => {
      const columnSlot = allSlots[column.prop]
      const scopedSlots = column.render || columnSlot
        ? {
          default: props => {
            const scope = {
              row: props.row,
              col: column,
              rowIdx: props.$index /* 行序号 */,
              colIdx: idx /* 列序号 */
            }

            return column.render
              ? column.render(h, scope)
              : columnSlot(scope)
          }
        }
        : {}

      return (
        <ElTableColumn
          label={column.label}
          prop={column.prop}
          align={this.columnAlign}
          scopedSlots={scopedSlots}
          {...{ props: column.elProps }}>
        </ElTableColumn>
      )
    })

    // 插入选择框列
    if (this.useSelection) {
      const selectionColumn = <ElTableColumn type="selection" />
      elTableColumns.unshift(selectionColumn)
    }

    const elTable = (
      <ElTable
        ref="elTable"
        data={this.data}
        {...{
          props: this.elTableProps,
          on: this.listeners
        }}>
        {elTableColumns}
      </ElTable>
    )

    return elTable
  }
}
